import "./App.css";
import Filter from "./components/Filter";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid container item sm={12} m={3} lg={3}>
          <div style={{ margin: "16px" }}>
            <Filter />
          </div>
        </Grid>
        <Grid container item sm={12} m={9} lg={9}>
          <h1>Hello! From Carstan</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
