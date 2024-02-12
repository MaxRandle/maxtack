import { AppNavHeader } from "@/components/composite/AppNavHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppNavHeader />
      {children}
    </>
  );
};

export default Layout;
