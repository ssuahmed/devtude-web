import "./tether.css";
import TetherHeader from "@/components/layout/TetherHeader";
import TetherFooter from "@/components/layout/TetherFooter";

export default function TetherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="tether-root">
      <TetherHeader />
      <main>{children}</main>
      <TetherFooter />
    </div>
  );
}
