import React from "react";
import { withStyles } from "@material-ui/core";
const user=JSON.parse(localStorage.getItem('labbox_user'))
import en from 'i18n/en'
import al from 'i18n/al'
let lang=en
if(user){
  lang=user.language=="en" ? en :al
}
export const LanguageContext = React.createContext({
  language: al,
  onChange: () => {}
});
const styles = {
};
const Page = (props) => {
  let { children } = props
  const [language, setLanguage] = React.useState(lang)
  return (
    <LanguageContext.Provider value={{
      language,
      onChange: (to) => {
        switch (to) {
          case 'en':
            setLanguage(en)
            break
          case 'al':
            setLanguage(al);
            break
        }
      },
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default withStyles(styles)(Page);
