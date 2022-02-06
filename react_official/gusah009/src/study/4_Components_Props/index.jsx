const dummy = {
  text: "댓글",
  date: "2022-02-06",
  author: {
    avatarUrl: "https://avatars.githubusercontent.com/u/26597702?s=400&u=d9912f52aca14a7a84c6c8d614d4e1b20a3f7891&v=4",
    name: "godmo"
  }
}

export default function ComponentsAndProps(props) {
  function CommentBeforeRefactor(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }

  function CommentAfterRefactor(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    )
  }

  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }

  function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <CommentAfterRefactor {...dummy} />
    </>
  );
}