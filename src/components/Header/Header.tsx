import './Header.css';
import { Sparkle } from "phosphor-react";

interface HeaderProps{
  title: string;
}

export function Header(props: HeaderProps){
  return(
    <div className='timeline__header'>
      {props.title}
     <Sparkle />
    </div>
  )
};