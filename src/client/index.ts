import Port from "client/api/Port";

(async () => {
  const ports = await Port.list();

  console.log(`ports: ${JSON.stringify(ports)}`);
})();
