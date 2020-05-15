import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/layout/services/auth.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MaterialService } from '../shared/classes/material.classes';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub: Subscription

  Log(text: Object) {
    console.log(text)
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        MaterialService.toast('Теперь вы можете зайти в систему используя свои данные')
      } else if (params['accessDenied']) {
        MaterialService.toast('Для начала авторизуйтесь в системе')
      } else if (params['sessionFailed']) {
        MaterialService.toast('Пожалуйста, войдите в систему заново')

      }
    })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }

  }

  onSubmit() {
    this.form.disable();


    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/overview']),
      error => {
        MaterialService.toast(error.error.message)
        this.form.enable();

      }
    );
  }
}
