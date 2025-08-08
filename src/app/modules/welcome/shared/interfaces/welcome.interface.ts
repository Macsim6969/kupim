export interface Welcome {
  state: string;
  title: string;
  location: string;
  description: string;
  image: string;
  bgImage: string;
  class: string;
  styleClass?: string;
  footerDescription: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  ogUrl: string;
  ogImage: string;
  altImage: string;
  isChangedCountry?: boolean;
  state_index?: string;
  arrayStates?: [
    {name: string, value: string, disabled: boolean, link: string},
  ]
}
