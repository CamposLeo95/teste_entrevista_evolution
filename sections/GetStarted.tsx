import LatestPost from "./LatestPosts.tsx";
export interface Props {
  enableInspectVSCode?: boolean;
}

export default function GetStarted({ enableInspectVSCode }: Props) {
  return (
    <section class="pt-20 pb-32">
      <LatestPost title="hello" />
    </section>
  );
}
