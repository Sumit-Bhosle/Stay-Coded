// fonts.ts (recommended to centralize)
import { Inter, Poppins, Montserrat } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '800'], variable: '--font-poppins' });
export const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
