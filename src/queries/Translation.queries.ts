// /queries/Translation.queries.ts
import { useMutation } from '@tanstack/react-query';
import { translateText } from '@/app/Translation/services/TranslationApi';

type TranslateParams = {
    text: string;
    from: string;
    to: string;
};

export const useTranslateMutation = () => {
return useMutation({
    mutationFn: ({ text, from, to }: TranslateParams) => 
        translateText(text, from, to),
  });
};
