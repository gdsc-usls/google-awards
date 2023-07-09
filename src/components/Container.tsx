type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ className, children }: Props) => {
  return (
    <section className={`max-w-screen-xl mx-auto w-[90%] 2xl:w-full ${className}`}>
      {children}
    </section>
  );
};
