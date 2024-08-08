interface task {
  id: number;
  name: string;
  status: string;
  icon: string;
  point: number;
  handleStart: (id: number) => any;
  handleClaim: (id: number, point: number) => any;
}
