import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private title: string = 'Urbana Tanning Map';
  private lat: number = 39.3311182;
  private lng: number = -77.3526541;

  constructor() { }

  ngOnInit() {
    var topMove = -20
    var original = 0

    $("input:eq(0)").focus(function(){
      $("label:eq(0)").css({top: topMove})
      $("input:eq(0)").css({"border-bottom-color": "#5fd9fd"})
    })
    $("input:eq(0)").focusout(function(){
      if (  $("input:eq(0)").val() != ""){
        $("input:eq(0)").css({"border-bottom-color": "#5fd9fd"})
      }
      else {
        $("label:eq(0)").css({top: original});
        $("input:eq(0)").css({"border-bottom-color": "gray"})

      }
    });

    $("input:eq(1)").focus(function(){
      $("label:eq(1)").css({top: topMove});
      $("input:eq(1)").css({"border-bottom-color": "#5fd9fd"})
    })
    $("input:eq(1)").focusout(function(){
      if (  $("input:eq(1)").val() != ""){
        $("input:eq(1)").css({"border-bottom-color": "#5fd9fd"})
      }
      else {
        $("label:eq(1)").css({top: original});
        $("input:eq(1)").css({"border-bottom-color": "gray"})

      }
    });


    $("input:eq(2)").focus(function(){
      $("label:eq(2)").css({top: topMove});
      $("input:eq(2)").css({"border-bottom-color": "#5fd9fd"})
    })
    $("input:eq(2)").focusout(function(){
      if (  $("input:eq(2)").val() != ""){
        $("input:eq(2)").css({"border-bottom-color": "#5fd9fd"})
      }
      else {
        $("label:eq(2)").css({top: original});
        $("input:eq(2)").css({"border-bottom-color": "gray"})

      }
    });

    $("input:eq(3)").focus(function(){
      $("label:eq(3)").css({top: topMove});
      $("input:eq(3)").css({"border-bottom-color": "#5fd9fd"})
    })
    $("input:eq(3)").focusout(function(){
      if (  $("input:eq(3)").val() != ""){
        $("input:eq(3)").css({"border-bottom-color": "#5fd9fd"})
      }
      else {
        $("label:eq(3)").css({top: original});
        $("input:eq(3)").css({"border-bottom-color": "gray"})

      }
    });
  }

}
