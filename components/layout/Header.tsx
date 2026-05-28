import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <>
      <header>
        <p style={{ margin: 0 }}>
          <strong>shiun</strong>
          {' / '}
          <a href="#product">product</a>
          {' / '}
          <a href="#how">how</a>
          {' / '}
          <a href="#specs">specs</a>
          {' / '}
          <a href="#faq">faq</a>
          {' / '}
          <a href="#preorder">preorder</a>
        </p>
        <ThemeToggle />
      </header>
      <hr />
    </>
  );
}
