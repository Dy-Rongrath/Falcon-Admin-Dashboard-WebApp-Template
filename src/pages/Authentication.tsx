import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  Key,
  Smartphone,
  Chrome,
  Github,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export default function Authentication() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Shield className="h-6 w-6" />
            Authentication
          </h1>
          <p className="text-gray-600">
            User authentication and security components
          </p>
        </div>
      </div>

      {/* Authentication Forms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Login Forms */}
        <div className="space-y-6">
          <Tabs defaultValue="login" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    Sign In to Falcon
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Social Login */}
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full gap-2">
                      <Chrome className="h-4 w-4" />
                      Continue with Google
                    </Button>
                    <Button variant="outline" className="w-full gap-2">
                      <Github className="h-4 w-4" />
                      Continue with GitHub
                    </Button>
                    <Button variant="outline" className="w-full gap-2">
                      <Twitter className="h-4 w-4" />
                      Continue with Twitter
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or continue with email
                      </span>
                    </div>
                  </div>

                  {/* Email Login Form */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="pl-10 pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="remember"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="remember" className="text-sm">
                          Remember me
                        </Label>
                      </div>
                      <Button variant="link" className="px-0 text-sm">
                        Forgot password?
                      </Button>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Sign In
                    </Button>
                  </div>

                  <div className="text-center text-sm">
                    Don't have an account?{" "}
                    <Button variant="link" className="px-0">
                      Sign up
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Create Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="pl-10 pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="pl-10 pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Button variant="link" className="px-0 text-sm">
                          Terms of Service
                        </Button>{" "}
                        and{" "}
                        <Button variant="link" className="px-0 text-sm">
                          Privacy Policy
                        </Button>
                      </Label>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Create Account
                    </Button>
                  </div>

                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Button variant="link" className="px-0">
                      Sign in
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Security Features */}
        <div className="space-y-6">
          {/* Two-Factor Authentication */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Two-Factor Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Add an extra layer of security to your account with 2FA
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter 6-digit code</Label>
                  <Input
                    id="otp"
                    placeholder="000000"
                    maxLength={6}
                    className="text-center text-2xl font-mono tracking-widest"
                  />
                </div>

                <Button className="w-full">Verify Code</Button>

                <div className="text-center">
                  <Button variant="link" className="text-sm">
                    Didn't receive a code? Resend
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Password Reset */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Reset Password
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Enter your email to receive a password reset link
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="resetEmail">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="resetEmail"
                      type="email"
                      placeholder="name@example.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <Button className="w-full">Send Reset Link</Button>

                <div className="text-center">
                  <Button variant="link" className="text-sm">
                    Back to login
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Verification */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Account Verification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Check your email
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    We sent a verification link to your email address
                  </p>
                </div>
                <div className="space-y-2">
                  <Button className="w-full">Open Email App</Button>
                  <Button variant="outline" className="w-full">
                    Resend Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Authentication Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Authentication Methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Email Authentication</h3>
                <p className="text-sm text-gray-600">
                  Login with email and password
                </p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">SMS Verification</h3>
                <p className="text-sm text-gray-600">Verify with SMS code</p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Multi-Factor Auth</h3>
                <p className="text-sm text-gray-600">
                  Enhanced security with 2FA
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
