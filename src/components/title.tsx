import {useEffect, useState, ChangeEvent, FC} from 'react';

interface Props {
  docTitle: string;
}

const Title: FC<Props> = ({docTitle}) => {
  const [title, setTitle] = useState<string>(docTitle);
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    console.log(title);
  }, [title]);

  const eventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const focusHandler = () => {
    setFocus(true);
  };

  const blurHandler = () => {
    setFocus(false);
  };

  return (
    <input
      type="text"
      id="docTitle"
      value={title}
      className={focus ? 'docTitleEdit' : 'docTitle'}
      onChange={eventHandler}
      onBlur={blurHandler}
      onFocus={focusHandler}
    />
  );
};

export default Title;
