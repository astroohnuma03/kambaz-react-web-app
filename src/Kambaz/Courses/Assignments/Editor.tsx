export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" rows={10} cols={50}>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select>
              <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select>
              <option value="Percentage" selected>Percentage</option>
              <option value="Number">Number</option>
              <option value="Letter">Letter</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select>
              <option value="Online" selected>Online</option>
              <option value="Physical">Physical</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-online-entry-check">Online Entry Options</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="checkbox" name="check-online-entry" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="checkbox" name="check-online-entry" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="checkbox" name="check-online-entry" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="checkbox" name="check-online-entry" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="checkbox" name="check-online-entry" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="text" placeholder="Everyone" value="Everyone" id="wd-assign-to"/>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="date" value="2024-05-13" id="wd-due-date"/>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="date" value="2024-05-06" id="wd-available-from"/>
          </td>
          <td align="left" valign="top">
            <input type="date" value="2024-05-20" id="wd-available-until"/>
          </td>
        </tr>
      </table>
      <hr />
      <button>Cancel</button>
      <button>Save</button>
    </div>
);}
