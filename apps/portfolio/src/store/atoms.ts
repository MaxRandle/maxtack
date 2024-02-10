import { atom, useAtom } from "jotai";

const ShouldAnimateLogoAtom = atom<boolean>(true);

export const useShouldAnimateLogoAtom = () => useAtom(ShouldAnimateLogoAtom);
