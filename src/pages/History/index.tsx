import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Task</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="yellow">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="red">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="yellow">Done</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
