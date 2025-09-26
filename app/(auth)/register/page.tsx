import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RegisterForm from './register-form';

export default function Register() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Register</CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  );
}
