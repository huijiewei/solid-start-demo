// @refresh reload
import {lazy, Suspense} from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  Head,
  Html,
  Meta, Route,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import Layout from "~/pages/Layout";
import Home from "~/pages/Home";
const About = lazy(async () => import('./pages/About'));

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <Route path={'/'} element={Layout}>
                <Route path={''} element={Home} />
                <Route path={'about'} element={About} />
              </Route>
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
