
interface HeaderProps {
    title: string;
}

export default function Header({
    // title,
}: HeaderProps) {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                Header
            </div>
        </div>
    );
}
