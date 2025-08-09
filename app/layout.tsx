import './globals.css';

type Props = {
    children: React.ReactNode;
};

// Since we have a `pages/api` folder, we assure that `app` is enabled:
export default function RootLayout({ children }: Props) {
    return children;
}
