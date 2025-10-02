import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './useAuth'

interface Payroll {
  id: string
  employee_id: string
  pay_period_start: string
  pay_period_end: string
  base_salary: number
  overtime_hours: number
  overtime_rate: number
  bonuses: number
  deductions: number
  gross_pay: number
  net_pay: number
  status: 'pending' | 'paid' | 'cancelled'
  paid_at?: string
  created_at: string
}

export function usePayroll() {
  const [payrolls, setPayrolls] = useState<Payroll[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { userProfile } = useAuth()

  useEffect(() => {
    if (userProfile) {
      fetchPayrolls()
    }
  }, [userProfile])

  const fetchPayrolls = async () => {
    try {
      setLoading(true)
      setError(null)

      // Get payrolls for employees belonging to the current user
      const { data, error } = await supabase
        .from('payroll')
        .select(`
          *,
          employees!inner(user_id)
        `)
        .eq('employees.user_id', userProfile?.id)
        .order('created_at', { ascending: false })

      if (error) throw error

      setPayrolls(data || [])
    } catch (err: any) {
      setError(err.message)
      console.error('Error fetching payrolls:', err)
    } finally {
      setLoading(false)
    }
  }

  // Calculate monthly revenue (sum of all paid payrolls in current month)
  const calculateMonthlyRevenue = () => {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()

    return payrolls
      .filter(payroll => {
        if (payroll.status !== 'paid' || !payroll.paid_at) return false
        
        const paidDate = new Date(payroll.paid_at)
        return paidDate.getMonth() === currentMonth && paidDate.getFullYear() === currentYear
      })
      .reduce((total, payroll) => total + payroll.net_pay, 0)
  }

  return {
    payrolls,
    loading,
    error,
    fetchPayrolls,
    monthlyRevenue: calculateMonthlyRevenue()
  }
}