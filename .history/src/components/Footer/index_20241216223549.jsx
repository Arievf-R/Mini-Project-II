export const Footer = () => {
  return (
    <div className="bg-green-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AMgrowth. All rights reserved.
        </p>
      </div>
    </div>
  );
};
