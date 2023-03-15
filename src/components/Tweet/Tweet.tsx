import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from 'react-router-dom';
import "./Tweet.css";

interface TweetProps {
  content: string;
  user: string;
  avatar: string;
  profile: string;
}

export function Tweet(props: TweetProps) {
  // Colocando a propriedade como uma obrigatoriedade.
  return (
    <Link to="/status" className="tweet">
      <img src={props.avatar} alt={props.user}/>

      <div className="tweet__content">
        <div className="tweet__content__header">
          <strong>{props.user}</strong>
          <span>{props.profile}</span>
        </div>

        <p>{props.content}</p>
        
        <div className="tweet__content__footer">
          <button>
            <ChatCircle />
            20
          </button>
          <button>
            <ArrowsClockwise />
            20
          </button>
          <button>
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}

// Atributos de componente = Propriedade
// props.children = Retorna conteúdo dentro da TAG
