import { Button } from '@components/ui/button';

interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    icon: React.ElementType;
}

const IconButton: React.FC<IconButtonProps> = ({
    icon: Icon,
    label,
    ...rest
}) => {
    return (
        <Button {...rest}>
            <Icon className="h-4 w-4" />
            {label}
        </Button>
    );
};

export default IconButton;
