import { Button } from "@/components/ui/button";
interface ButtonHeartbeatEffectProps {
  label: string;
}
const ButtonHeartbeatEffect = ({ label }: ButtonHeartbeatEffectProps) => {
  return <Button className="animate-heartbeat">{label}</Button>;
};

export default ButtonHeartbeatEffect;
