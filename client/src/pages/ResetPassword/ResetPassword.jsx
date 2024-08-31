import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { Alert, AlertDescription } from "../../components/ui/alert";
import axios from 'axios';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isReset, setIsReset] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState(''); // Assume you get the token from the URL or context

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      // Replace with your server endpoint for password reset
      const response = await axios.post('/api/auth/reset-password', { token, newPassword });
      if (response.status === 200) {
        setIsReset(true);
      }
    } catch (err) {
      setError('Error resetting password. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-purple-600">Abhyaas</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="mb-6 text-2xl font-semibold text-center">Reset Your Password</h2>
          {!isReset ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="new-password" className="block mb-1 text-sm font-medium text-gray-700">
                  New Password
                </label>
                <Input
                  type="password"
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full"
                  placeholder="Enter your new password"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirm-password" className="block mb-1 text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full"
                  placeholder="Confirm your new password"
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                Reset Password
              </Button>
            </form>
          ) : (
            <Alert>
              <AlertDescription>
                Your password has been successfully reset. You can now <a href="/signin" className="text-purple-600 hover:underline">sign in</a> with your new password.
              </AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
