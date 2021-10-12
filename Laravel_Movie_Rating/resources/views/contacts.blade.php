<div class="container form-group">
    <form>
      <ul>
        <li class="credential-block">
          <label for="name">Username</label>
          <span>
            <input
              type="text"
              id="username"
              name="usernameInput"
              class="input-line"
              required
              [(ngModel)]="usernameInput"
            />
          </span>
        </li>
        <li class="credential-block">
          <label for="name">Password</label>
          <span>
            <input
              type="password"
              id="password"
              name="passwordInput"
              class="input-line"
              required
              [(ngModel)]="passwordInput"
            />
          </span>
        </li>
        <span>
          <button type="submit" (click)="submitButton()" class="submit">
            Let's go!
          </button>
        </span>
      </ul>
    </form>
  </div>
