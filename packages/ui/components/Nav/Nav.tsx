type NavProps = React.ComponentPropsWithoutRef<"nav">;

export const Nav: React.FC<NavProps> = ({ ...props }) => {
  return (
    <nav
      className="dark bg-base-1100 py-4 custom-dark:bg-base-1200"
      {...props}
    />
  );
};
