import { animated, useSpring } from '@react-spring/web';

export default function BasicSpring() {
  const [container, apiContainer] = useSpring(() => ({
    from: { outline: '1px solid #25242F' }
  }));
  const [square, apiSquare] = useSpring(() => ({
    from: { x: 0, background: '#ff6d6d' }
  }));

  const handleClick = () => {
    apiSquare.start({
      to: {
        x: square.x.get() === 100 ? 0 : 100,
        background: square.x.get() === 100 ? '#ff6d6d' : '#57D2B9'
      }
    });

    apiContainer.start({
      to: {
        outline: `2px solid ${square.x.get() === 100 ? '#25242F' : '#57D2B9'}`
      }
    });
  };

  return (
    <animated.div
      style={{
        borderRadius: '0.8rem',
        padding: '1rem',
        width: '20rem',
        margin: '2rem',
        ...container
      }}
    >
      <animated.div
        onClick={handleClick}
        style={{
          width: '8rem',
          height: '8rem',
          borderRadius: '0.8rem',
          ...square
        }}
      />
    </animated.div>
  );
}
