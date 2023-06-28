import LatestPost from "./LatestPosts.tsx";
export interface Props {
  enableInspectVSCode?: boolean;
}

export default function GetStarted({ enableInspectVSCode }: Props) {
  return (
    <section>
      <LatestPost title="hello" />
    </section>
  );
}
