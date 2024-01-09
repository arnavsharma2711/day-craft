import TextLogo from "@/components/logo/textLogo";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex gap-y-4 flex-col items-center justify-center">
      <TextLogo />
      <p className="text-muted-foreground text-md">{label}</p>
    </div>
  );
};
