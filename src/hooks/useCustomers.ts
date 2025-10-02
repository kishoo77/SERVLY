import { useState, useEffect } from 'react'
import { supabase, Customer } from '../lib/supabase'
import { useAuth } from './useAuth'

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { userProfile } = useAuth()

  useEffect(() => {
    if (userProfile) {
      fetchCustomers()
    }
  }, [userProfile])

  const fetchCustomers = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from('customers')
        .select('*')
        .eq('user_id', userProfile?.id)
        .order('created_at', { ascending: false })

      if (error) throw error

      setCustomers(data || [])
    } catch (err: any) {
      setError(err.message)
      console.error('Error fetching customers:', err)
    } finally {
      setLoading(false)
    }
  }

  const addCustomer = async (customerData: Omit<Customer, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    try {
      if (!userProfile) throw new Error('No user profile found')

      const { data, error } = await supabase
        .from('customers')
        .insert({
          ...customerData,
          user_id: userProfile.id
        })
        .select()
        .single()

      if (error) throw error

      setCustomers(prev => [data, ...prev])
      return { data, error: null }
    } catch (err: any) {
      return { data: null, error: err.message }
    }
  }

  const updateCustomer = async (id: string, updates: Partial<Customer>) => {
    try {
      const { data, error } = await supabase
        .from('customers')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      setCustomers(prev => prev.map(customer => customer.id === id ? data : customer))
      return { data, error: null }
    } catch (err: any) {
      return { data: null, error: err.message }
    }
  }

  const deleteCustomer = async (id: string) => {
    try {
      const { error } = await supabase
        .from('customers')
        .delete()
        .eq('id', id)

      if (error) throw error

      setCustomers(prev => prev.filter(customer => customer.id !== id))
      return { error: null }
    } catch (err: any) {
      return { error: err.message }
    }
  }

  // Calculate total loyalty points
  const totalLoyaltyPoints = customers.reduce((total, customer) => total + (customer.loyalty_points || 0), 0)

  return {
    customers,
    loading,
    error,
    fetchCustomers,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    totalLoyaltyPoints
  }
}