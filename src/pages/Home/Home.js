import NavBar from "../../components/navbar/NavBar";
import dashboard from "../../images/dashboard.png";

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <NavBar />

      <div style={{ display: 'flex', marginLeft: '-6rem', justifyContent: 'space-between', alignItems: 'center' }}>

        <div style={{ display: 'flex' }}>

          <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
            <h2>ERP da Empresa</h2>

            <img src={dashboard} alt="dashboard" width="60%" />
          </div>

          <div style={{ display: 'flex', flexDirection: "column", justifyContent: "flex-end" }}>
            45% <div style={{ padding: '3 px', marginBottom: "2rem", background: 'red', color: 'red' }}>aa</div>
            25% <div style={{ padding: '3 px', marginBottom: "2rem", background: 'yellow', color: 'yellow' }}>aa</div>
            35% <div style={{ padding: '3 px', marginBottom: "2rem", background: 'gray', color: 'gray' }}>aa</div>
            10% <div style={{ padding: '3 px', marginBottom: "2rem", background: '#c1c0c0', color: '#c1c0c0' }}>aa</div>
            5% <div style={{ padding: '3 px', marginBottom: "2rem", background: 'cyan', color: 'cyan' }}>aa</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <div style={{ display: 'flex' }}>

          <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
            <h2>Gestão empresarial</h2>

            <img src={dashboard} alt="dashboard" width="80%" />
          </div>

          <div style={{ display: 'flex', flexDirection: "column", justifyContent: "flex-end" }}>
            45% <div style={{ padding: '3 px', marginBottom: "2rem", background: 'red', color: 'red' }}>aa</div>
            25% <div style={{ padding: '3 px', marginBottom: "2rem", background: 'yellow', color: 'yellow' }}>aa</div>
            35% <div style={{ padding: '3 px', marginBottom: "2rem", background: 'gray', color: 'gray' }}>aa</div>
            10% <div style={{ padding: '3 px', marginBottom: "2rem", background: '#c1c0c0', color: '#c1c0c0' }}>aa</div>
            5% <div style={{ padding: '3 px', marginBottom: "2rem", background: 'cyan', color: 'cyan' }}>aa</div>
          </div>
        </div>
      </div>
    </div>
  )
}
