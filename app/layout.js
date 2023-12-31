import './globals.scss';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { getUserBySessionToken } from '../database/users';
import LogoutButton from './(auth)/logout/LogoutButton';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {

  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user =
    sessionToken && (await getUserBySessionToken(sessionToken.value));


  // console.log('Sessions: ', user);


  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/buckets">Buckets</Link>
            <Link href="/users/username">Profile</Link>


          </div>
          <div>
            {user ? (
                <>
                 <div>Hello, {user.username} you are logged in.</div>
                 <LogoutButton />
                </>
                ) : (
                  <>
                  <Link href="/register">Register</Link>
                  <Link href="/login">Login</Link>
                  </>
                )}
          </div>
        </nav>
        <div>
          {children}
        </div>
        <div>
        <footer className="footer">
          <p>© 2023  MoveForward | All rights reserved.</p>
        </footer>
        </div>

        </body>
    </html>
  )
}
