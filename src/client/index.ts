import Port from "client/api/port";

(async () => {
  const ports = await Port.list();

  console.log(`ports: ${JSON.stringify(ports)}`);
})();
