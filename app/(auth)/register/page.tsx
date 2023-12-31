import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getValidSessionByToken } from '../../../database/sessions';
import RegisterForm from './RegisterForm';

export default async function RegisterPage() {

  const sessionTokenCookie = cookies().get('sessionToken');

  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  if (session) redirect('/');

  return (
    <div className="auth-page-container registration-background">
      <div className="form-side">
        <RegisterForm />
      </div>
      <div className="image-side"/>


    </div>

  );
}
