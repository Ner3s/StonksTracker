interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Card({ children, ...rest }: CardProps) {
  return (
    <div {...rest} className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg">
      {children}
    </div>
  );
}

export { Card };
