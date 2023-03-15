import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../components/Header/Header";
import { Separator } from "../components/Separator/Separator";
import { Tweet } from "../components/Tweet/Tweet";

import "./Timeline.css";

export function Timeline() {
  // state = Variaveis que o React Monitora a todo momento. Caso mudamos, o react reage.

  const [tweets, setTweets] = useState([
    {
      content: "Mais um dia estudando ReactJS, continuo sem entender nada.",
      user: "Matheus Ribeiro",
      avatar: "https://github.com/matheusribeiro02.png",
      profile: "@mtszera",
    },
    {
      content:
        "Tomei multa de velocidade hj, quando fui ver minha moto estava a 300km por hora kkkkkkk",
      user: "Marcos Felipe",
      avatar: "https://github.com/marc0sfelipe.png",
      profile: "@ilusion",
    },
    {
      content: "manerin kkkkk",
      user: "Jão Zeca",
      avatar: "https://github.com/joaovitorsh.png",
      profile: "@jzk2",
    },
  ]);

  const [newTweet, setNewTweet] = useState({
    content: "",
    user: "",
    avatar: "",
    profile: ""
  });

  function createNewTweet(e: FormEvent) {
    e.preventDefault(); // Previne a ação padrão. (Neste caso previne o redirecionamento.)
    if(newTweet.content == ''){
      return createNewTweet;
    } else {
      setTweets([newTweet, ...tweets]); // chamo a função setTweets para atualizar a variavel tweets.
      setNewTweet({
        content: "",
        user: "",
        avatar: "",
        profile: ""
      });
    }
  }

  function handleKeyDown(e: KeyboardEvent){
    if(e.key === "Enter" || e.ctrlKey || e.metaKey){
      e.preventDefault();
      if(newTweet.content == ''){
        return createNewTweet;
      } else {
        setTweets([newTweet,...tweets]); // chamo a função setTweets para atualizar a variavel tweets.
        setNewTweet({
          content: "",
          user: "",
          avatar: "",
          profile: ""
        });
      }
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form action="" className="new-tweet-form" onSubmit={createNewTweet}>
        <label htmlFor="tweet">
          <img
            src="https://github.com/hiagomartins18.png"
            alt="Hiago Martins"
          />
          <textarea
            id="Tweet"
            placeholder="What's happening?"
            value={(newTweet.avatar, newTweet.profile, newTweet.user, newTweet.content)}
            onKeyDown={handleKeyDown}
            onChange={(event) => {
              setNewTweet({
                avatar: "https://github.com/hiagomartins18.png",
                profile: "@hiagopvdz",
                user: "Hiago Martins",
                content: event.target.value});
            }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet
          key={tweet.user}
          content={tweet.content}
          avatar={tweet.avatar}
          profile={tweet.profile}
          user={tweet.user}
        />
      ))}
    </main>
  );
}
