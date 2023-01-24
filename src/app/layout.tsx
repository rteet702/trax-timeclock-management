import "./globals.css";
import bg from "../../public/mountains.jpg";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "1920px 1080px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                {children}
            </body>
        </html>
    );
}
