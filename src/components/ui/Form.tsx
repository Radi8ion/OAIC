import { ReactNode } from 'react';

export const Form = ({ children }: { children: ReactNode }) => <form>{children}</form>;
export const FormField = (props: any) => <div>{props.render({ field: {} })}</div>;
export const FormItem = ({ children, ...props }: any) => <div className="space-y-2" {...props}>{children}</div>;
export const FormLabel = ({ children, ...props }: any) => <label className="text-sm font-medium" {...props}>{children}</label>;
export const FormControl = ({ children, ...props }: any) => <div {...props}>{children}</div>;
export const FormDescription = ({ children, ...props }: any) => <p className="text-sm text-muted-foreground" {...props}>{children}</p>;
export const FormMessage = ({ children, ...props }: any) => <p className="text-sm text-red-500" {...props}>{children}</p>;
