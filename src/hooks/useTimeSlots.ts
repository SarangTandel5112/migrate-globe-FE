import { useState, useEffect } from 'react';
import { getTimeSlots } from '@/api/zoom-consultation';

export const useTimeSlots = (selectedDate: Date | null) => {
    const [timeSlots, setTimeSlots] = useState<{ slots: string[] }>({ slots: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (selectedDate) {
            const fetchTimeSlots = async () => {
                try {
                    setLoading(true);
                    setError(null);
                    
                    // Format date as YYYY-MM-DD
                    const formattedDate = selectedDate.toISOString().split('T')[0];
                    const slots = await getTimeSlots(formattedDate);
                    setTimeSlots(slots);
                } catch (error) {
                    console.error('Error fetching time slots:', error);
                    setError(error instanceof Error ? error.message : 'Failed to fetch time slots');
                    setTimeSlots({ slots: [] });
                } finally {
                    setLoading(false);
                }
            };

            fetchTimeSlots();
        } else {
            setTimeSlots({ slots: [] });
        }
    }, [selectedDate]);

    const refetch = async () => {
        if (selectedDate) {
            try {
                setLoading(true);
                setError(null);
                
                const formattedDate = selectedDate.toISOString().split('T')[0];
                const slots = await getTimeSlots(formattedDate);
                setTimeSlots(slots);
            } catch (error) {
                console.error('Error fetching time slots:', error);
                setError(error instanceof Error ? error.message : 'Failed to fetch time slots');
                setTimeSlots({ slots: [] });
            } finally {
                setLoading(false);
            }
        }
    };

    return {
        timeSlots,
        loading,
        error,
        refetch
    };
}; 