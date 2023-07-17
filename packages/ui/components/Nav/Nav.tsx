type NavProps = React.ComponentPropsWithoutRef<"nav">;

export const Nav: React.FC<NavProps> = ({ ...props }) => {
  return (
    <nav
      className="dark bg-base-1400 py-4 custom-dark:bg-base-1500"
      {...props}
    />
  );
};
