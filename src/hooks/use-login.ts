import { useMutation } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { toast } from "sonner";

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: any;
}

export const useLogin = () =>
  useMutation<LoginResponse, Error, { email: string; password: string }>({
    mutationFn: async (credentials) => {
      try {
        // Use the backend API directly with trailing slash to match the API endpoint
        const response = await axios.post("/auth/login/", credentials);

        const data = response.data;

        if (!data.token) {
          throw new Error('Login failed: Token not received');
        }

        // Save token in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', data.token);
          if (data.refreshToken) {
            localStorage.setItem('refreshToken', data.refreshToken);
          }
        }

        toast.success('Login successful', {
          description: 'Welcome back!',
          duration: 3000,
        });

        return data;
      } catch (error: any) {
        console.error('Login error:', error);
        
        let errorMessage = 'An error occurred during login';
        
        if (error.response) {
          // Handle HTTP errors
          if (error.response.status === 401) {
            errorMessage = 'Incorrect email or password';
          } else if (error.response.status === 405) {
            errorMessage = 'Login endpoint not available. Please check the API configuration.';
          } else if (error.response.data?.error) {
            errorMessage = error.response.data.error;
          } else if (error.response.data?.message) {
            errorMessage = error.response.data.message;
          } else {
            errorMessage = `Server error: ${error.response.status}`;
          }
        } else if (error.request) {
          errorMessage = 'Cannot connect to server. Please check your internet connection';
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        toast.error('Login Error', {
          description: errorMessage,
          duration: 5000,
        });
        
        throw new Error(errorMessage);
      }
    },
  });
