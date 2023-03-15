import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header/Header";
import { Separator } from "../components/Separator/Separator";
import { Tweet } from "../components/Tweet/Tweet";

import "./Status.css";

export function Status() {
  const [newAnswer, setNewAnswer] = useState({
    content: "",
    user: "",
    avatar: "",
    profile: ""
  });
  const [answers, setAnswers] = useState([
    {
      content: "Parabens Hiago você é foda",
      user: "Matheus Ribeiro",
      avatar: "https://github.com/matheusribeiro02.png",
      profile: "@mtszera",
    },
    {
      content: "kkkkkk top",
      user: "Marcos Felipe",
      avatar: "https://github.com/marc0sfelipe.png",
      profile: "@ilusion",
    },
    {
      content: "manerin",
      user: "Jão Zeca",
      avatar: "https://github.com/joaovitorsh.png",
      profile: "@jzk2",
    },
  ]);

  function createNewAnswer(e: FormEvent) {
    e.preventDefault();
    if (newAnswer.content == ''){
      return createNewAnswer;
    }
    else{
      setAnswers([newAnswer, ...answers]);
      setNewAnswer({
        content: "",
        user: "",
        avatar: "",
        profile: ""
      });
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.ctrlKey || e.metaKey) {
      e.preventDefault();
      if(newAnswer.content == ''){
        return createNewAnswer;
      } else {
        setAnswers([newAnswer,...answers]);
        setNewAnswer({
          content: "",
          user: "",
          avatar: "",
          profile: ""
        });
      }
    }
  }

  return (
    <main className="status">
      <Header title="" />

      <Tweet
        user="Hiago Martins"
        avatar="https://github.com/hiagomartins18.png"
        profile="@hiagopvdz"
        content="Finalmente aprendi ReactJS com TailwindCSS!!!"
      />

      <Separator />

      <form action="" className="answer-tweet-form" onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img
            src="https://github.com/hiagomartins18.png"
            alt="Hiago Martins"
          />
          <textarea
            id="Tweet"
            placeholder="What's happening?"
            value={(newAnswer.avatar, newAnswer.profile, newAnswer.user, newAnswer.content)}
            onKeyDown={handleKeyDown}
            onChange={(event) => {
              setNewAnswer({
                avatar: "https://github.com/hiagomartins18.png", 
                profile: "@hiagopvdz",
                content: event.target.value,
                user: "Hiago Martins"
              });
            }}
          />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => (
        <Tweet
          key={answer.profile}
          content={answer.content}
          avatar={answer.avatar}
          profile={answer.profile}
          user={answer.user}
        />
      ))}
    </main>
  );
}
