"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryclient = new QueryClient();
type Props = {
  children: React.ReactNode;
};

export const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
  );
};
