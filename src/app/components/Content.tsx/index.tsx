import { JSX, useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { FcGoogle } from 'react-icons/fc';

const Content = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const router = useRouter();

  const validate = (): boolean => {
    const tempErrors: { email?: string; password?: string } = {};
    if (!email) tempErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      tempErrors.email = 'Invalid email format';
    if (!password) tempErrors.password = 'Password is required';
    else if (password.length < 6)
      tempErrors.password = 'Password must be at least 6 characters';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (validate()) {
      router.push('/dashboard');
    }
  };
  return (
    <div className="flex-1 min-h-screen flex items-center justify-center">
      <div className="w-full justify-center h-full max-w-md space-y-6 p-8 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-center font-medium text-[62px] leading-[68px] text-[#1D1F1E]">
            Sign In
          </h2>
          <p className="text-center text-[#646A69] text-lg leading-7 font-normal">
            Access our services in one click
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              placeholder="Enter your email"
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              placeholder="Enter your password"
            />
            <Button
              type="submit"
              text="Login"
              className="w-full bg-[#030B53] hover:bg-[#033e53] transition-colors rounded-xl py-4 px-5 shadow-sm shadow-[#2E98A2] text-lg"
            />
          </form>
          <div className="relative my-4 flex items-center justify-center">
            <p className="px-3 text-lg font-medium text-[#383838]">
              or
            </p>
          </div>
          <Button
            text="Continue with Google"
            icon={<FcGoogle />}
            className="w-full border font-medium text-gray-700 hover:bg-gray-100 transition-colors rounded-xl py-4 px-5 shadow-sm shadow-[#EFF0F2] text-lg"
          />
          <p className="text-center text-base font-medium text-[#242424] mt-5">
            Didn’t have an account?{' '}
            <a
              href="/register"
              className="text-lg underline hover:text-[#515151] transition-all"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
