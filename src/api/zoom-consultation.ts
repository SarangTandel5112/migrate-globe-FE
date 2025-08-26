import { API_URL } from "@/constants";
import { formatDate, getAuthHeaders } from "@/utils/helpers";

export interface TimeSlot {
    id: string;
    time: string;
    isAvailable: boolean;
}

export interface GetTimeSlotsRequest {
    date: string; // Format: YYYY-MM-DD
}

export interface GetTimeSlotsResponse {
    success: boolean;
    data: {
        slots: string[]; // Array of time strings
    };
    message?: string;
}

export interface BookConsultationRequest {
    firstName: string;
    lastName: string;
    countryCode: string;
    phoneNumber: string;
    country: string;
    date: string;
    time: string;
    email: string;
}

export interface BookConsultationResponse {
    success: boolean;
    data?: {
        checkout_url?: string;
        // [key: string]: any;
    };
    checkout_url?: string; // Direct property on response
    message?: string;
}

export async function getTimeSlots(date: string): Promise<{ slots: string[] }> {
    try {
        const response = await fetch(`${API_URL}setmore/schedule`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ selected_date: formatDate(new Date(date), 'dd/mm/yyyy') }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: GetTimeSlotsResponse = await response.json();
        
        // if (!result.success) {
        //     throw new Error(result.message || 'Failed to fetch time slots');
        // }

        return result.data || { slots: [] };
    } catch (error) {
        console.error('Error fetching time slots:', error);
        throw error;
    }
}

export async function bookConsultation(bookingData: BookConsultationRequest, token: string): Promise<BookConsultationResponse> {
    try {
        const response = await fetch(`${API_URL}consultations/initiate-payment`, {
            method: 'POST',
            headers: getAuthHeaders(token?.toString()),
            body: JSON.stringify(bookingData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: BookConsultationResponse = await response.json();
        
        // if (!result.success) {
        //     throw new Error(result.message || 'Failed to book consultation');
        // }

        return result;
    } catch (error) {
        console.error('Error booking consultation:', error);
        throw error;
    }
} 