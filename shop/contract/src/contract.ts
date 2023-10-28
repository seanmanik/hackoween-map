import { NearBindgen, near, call, view, Vector } from 'near-sdk-js'
import { User } from './model'

@NearBindgen({})
class GuestBook {
  total_points: number = 0;

  @call({ payableFunction: false })
  add_points({ points }: { points: number }) {
    const new_point = Number(this.total_points) + Number(points);
    this.total_points = new_point;
  }

  @call({ payableFunction: false })
  redeem_points({ points }: { points: number }) {
    const point = Number(this.total_points) - Number(points);
    this.total_points = point;
  }

  @view({})
  get_points(): number { 
    return this.total_points;
  }

}
