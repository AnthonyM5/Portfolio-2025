import React from "react";

export interface StyleContextType {
  isDark: boolean;
  changeTheme?: () => void;
}

const StyleContext = React.createContext<StyleContextType>({ isDark: false });
export default StyleContext;
